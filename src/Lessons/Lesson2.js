import { useMemo, useState } from "react";

export const Lesson2 = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");

    const isTitleValid = useMemo(() => title.length > 20, [title]);
    const isSubtitleValid = useMemo(() => !subtitle.startsWith("Subtitle"), [subtitle]);
   
    const onFromSend = async () => {
        console.log(title, subtitle )
        console.log(`?title=${title}&subtitle=${subtitle}`)

        const queryParams = '?' + new URLSearchParams({title, subtitle}).toString();
        

        const response = await fetch(`http://localhost:3000${queryParams}`);
        console.log(response.status);
        console.log(await response.text());
    };
    
    return (
        <div>
            <h3>Create a course</h3>
            <input 
               placeholder="Title" 
               value={title} 
               onChange={event => setTitle(event.target.value)}
            />
            {isTitleValid && <p>Title should be less than 20</p>}
            <br></br>
            <input 
               placeholder="Subtitle" 
               value={subtitle}
               onChange={event => setSubtitle(event.target.value)}
            />
            {isSubtitleValid && <p>Subtitle shuold starts with "Subtitle"</p>}
            <br></br>
            <button 
               onClick={onFromSend}
               disabled={isTitleValid}
            >
                Send
            </button>
        </div>
    )
}