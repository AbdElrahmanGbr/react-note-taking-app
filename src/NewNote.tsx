import {NoteForm} from "./NoteForm";

export const NewNote: React.FC<{  }> = props => {
    return (
        <>
           <h1 className={"mb-4"}>New Note</h1>
            <NoteForm/>
        </>
    );
};