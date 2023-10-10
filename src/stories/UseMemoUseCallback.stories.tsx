import React, {useCallback, useState} from "react";

export default {
    title: 'useMemo and useCallback'
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

export const LikeUseCallback = () => {
    console.log('UseCallback components is rendered');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    /*const newArray = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('a') > -1);
    }, books);


    const memoizedAddBook = useMemo(() => {
        return () => {
            setBooks([...books, 'Angular ' + new Date().getTime()])
        };
    }, [books]);*/

    const memoizedAddBook2 = useCallback(() => {
        console.log(books);
        setBooks([...books, 'Angular ' + new Date().getTime()])
        console.log(books);
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>

            <NewMessageCounter count={counter}/>
            <Books addBook={memoizedAddBook2}/>
        </>
    )
        ;
}

type BooksSecretPropsType = {
    books?: string[]
    addBook: () => void
}
const BooksSecret: React.FC<BooksSecretPropsType> = ({books, addBook}) => {
    console.log('Books secret');
    return (
        <div>
            <button onClick={addBook}>add book</button>
            {/*{books.map((b,i) => {
                return (
                    <div key={i}>{b}</div>
                );
            })}*/}
        </div>
    );
}

const Books = React.memo(BooksSecret);