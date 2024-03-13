import fetch from 'node-fetch';
import FormData from 'form-data';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config({ path: __dirname + '/.env' });

const clickupApiKey: string = process.env['CLICKUP_API_KEY'] || "";
const clickupFolderNextActions: string = process.env['CLICKUP_FOLDER_NEXTACTIONS'] || ""
const clickupFolderScheduled: string = process.env['CLICKUP_FOLDER_SCHEDULED'] || ""
const clickupFolderIdeas: string = "901200425419"
const clickupUserId: string = process.env['CLICKUP_USER_ID'] || ""
const clickupTeamId: string = process.env['CLICKUP_TEAM_ID'] || ""



export async function createTask(name: string, description: string, dueDate: Date): Promise<string> {
    const query = new URLSearchParams({
        custom_task_ids: 'true',
        team_id: clickupTeamId
    }).toString();

    const dueDateNumber = dueDate.getTime()

    const resp = await fetch(
        `https://api.clickup.com/api/v2/list/${clickupFolderScheduled}/task?${query}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: clickupApiKey,
            },
            body: JSON.stringify({
                name: name,
                // description: 'New Task Description',
                markdown_description: description,
                assignees: [clickupUserId],
                tags: [],
                status: 'TODO',
                priority: 3,
                due_date: dueDateNumber,
                due_date_time: false,
                // time_estimate: 8640000,
                // start_date: 1567780450202,
                // start_date_time: false,
                // notify_all: true,
                // parent: null,
                // links_to: null,
                // check_required_custom_fields: true,
                custom_fields: [
                    {
                        id: "d3f22569-b528-4de4-9e8f-b7555c5aa013",
                        value: 2,
                    },
                    {
                        id: "ab23fe26-5362-4a7d-acbf-0ee02b71279a",
                        value: 0,
                    },
                    // {
                    //     id: '0a52c486-5f05-403b-b4fd-c512ff05131c',
                    //     value: 'This is a string of text added to a Custom Field.'
                    // }
                ]
            })
        }
    );

    const data = await resp.json().catch((error) => {
        console.error('Error parsing response as JSON:', error);
        return ""
    });
    // console.log(data);

    console.log("Task created with id:", data.id)

    return data.id;
}


// console.log("api key:", clickupApiKey)
// console.log("user id:", clickupUserId)
// console.log("team id:", clickupTeamId)


// createTask("Bildertest3", "this is a description **skadfj sadlfj** test", date).then((id) => {  console.log(id) })





export async function addImage(taskId: string, imagePath: string) {
    const query = new URLSearchParams({
        custom_task_ids: 'true',
        team_id: clickupTeamId
    }).toString();

    const form = new FormData();
    // form.append('attachment', './public/static/books.png');
    try {
        form.append('attachment', fs.createReadStream(imagePath));

        const resp = await fetch(
            `https://api.clickup.com/api/v2/task/${taskId}/attachment?${query}`,
            {
                method: 'POST',
                headers: {
                    Authorization: clickupApiKey
                },
                body: form
            }
        );

        const data = await resp.text();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);

    }
}


// const taskId = '86942anh4';
// run(taskId, './public/statics/books.png');