import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    // Состояние для данного компонента формы
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Tom Soyer');
    const [isPending, setIsPending] = useState(false);
    // редирект иначе говоря переадресация с созданием нового поста на главную страницу по / 
    const navigate = useNavigate();

    // Очистка формы 
    const clearForm = () => {
        setTitle('')
        setBody('')
        setAuthor('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/posts', {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New post was added!');
            setIsPending(false)
            clearForm();
            navigate('/')
        })
    }

    return (
        <div className="create">
            <h2>Add a new Post</h2>
            <form onSubmit={handleSubmit}>
                <label> Post title</label>
                <input type="text" required value={title} onChange={(e) => {setTitle(e.target.value)}}/>

                <label> Post content</label>
                <textarea value={body} onChange={(e) => {setBody(e.target.value)}}></textarea>

                <label>Author</label>
                <select value={author} onChange={(e) => {setAuthor(e.target.value)}}>
                    <option value="John Doe">John Doe</option>
                    <option value="Mary Jane">Mary Jane</option>
                    <option value="Tom Soyer">Tom Soyer</option>
                </select>

                {isPending && <button disabled>Adding post...</button>}
                {!isPending && <button>Create Post</button>}
            </form>
        </div>
    );
}

export default Create;