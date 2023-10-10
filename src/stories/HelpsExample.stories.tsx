import React, {useMemo, useState} from "react";
import s from "./HelpsExample.module.css";


export default {
    title: 'Helps Example',

}
type City = {
    id: number
    title: string
    country: string
    population: number
}

type SelectPropsItems = {
    value?: string
    onChange: (title: string) => void
    items: City[]

}

const citiesList: City[] = [
    {id: 1, title: 'Moscow', country: 'Russia', population: 13104733},
    {id: 2, title: 'Saint Petersburg', country: 'Russia', population: 5600044},
    {id: 3, title: 'Kostroma', country: 'Russia', population: 265965},
    {id: 4, title: 'Minsk', country: 'Belarus', population: 2009786},
    {id: 5, title: 'Mogilev', country: 'Belarus', population: 380440},
    {id: 6, title: 'Grodno', country: 'Belarus', population: 368710},
    {id: 7, title: 'Kiev', country: 'Ukraine', population: 2967000},
    {id: 8, title: 'Lviv', country: 'Ukraine', population: 721301},
    {id: 9, title: 'Ternopil', country: 'Ukraine', population: 216384}
];

const Select: React.FC<SelectPropsItems> = (props) => {
    const [isShown, setIsShown] = useState(false);

    const changeIsShownHandler = () => {
        setIsShown(!isShown);
    }

    const changeValue = (title: string) => {
        props.onChange(title);
        setIsShown(false);
    }

    return (
        <div >
            <div className={s.itemBlock + ' ' + s.optionsSelector}
                 onClick={changeIsShownHandler}
            >{props.value}</div>
            {isShown && props.items.map((i, index) => {
                return (
                    <div key={i.id}
                         className={s.itemBlock + ' ' + s.option}
                         onClick={() => changeValue(i.title)}
                    >{i.title}</div>
                );
            })}
        </div>
    );
};

const MemoizedSelect = React.memo(Select);

export const HelpsExampleStories = () => {
    const [counter, setCounter] = useState<number>(0);
    const [cities, setCities] = useState(citiesList)
    const [valueByMLetter, setValueByMLetter] = useState('choose city by letter');
    const [valueByCountry, setValueByCountry] = useState('choose city by country');
    const [valueByPopulation, setValueByPopulation] = useState('choose by population');

    const incrCount = () => {
        setCounter(counter + 1);
    }

    const selectCityByMLetter = (title: string) => {
        setValueByMLetter(title);
    }
    const selectCityByCountry = (title: string) => {
        setValueByCountry(title);
    }
    const selectCityByPopulation = (title: string) => {
        setValueByPopulation(title);
    }

    let value1 = useMemo(() => {
        return valueByMLetter;
    }, [valueByMLetter]);

    let value2 = useMemo(() => {
        return valueByCountry;
    }, [valueByCountry]);

    let value3 = useMemo(() => {
        return valueByPopulation;
    }, [valueByPopulation]);



    const citiesFilteredByMLetter = useMemo(() => {
        console.log('cities filtered by m letter are triggered');
        return cities.filter(c => c.title.toLowerCase().split('').includes('m'));
    }, [cities]);

    const citiesFilteredByCountry = useMemo(() => {
        console.log('cities filtered by country are triggered');
        return cities.filter(c => c.country === 'Belarus');
    }, [cities]);

    const citiesFilteredByPopulation = useMemo(() => {
        console.log('cities filtered by population are triggered')
        return cities.filter(c => c.population > 1000000);
    }, [cities])


    return (
        <div>

            <h3>{counter}</h3>
            <button onClick={incrCount}>increment</button>
            <div className={s.selectsWrapper}>
                <MemoizedSelect onChange={selectCityByMLetter} items={citiesFilteredByMLetter} value={value1}/>
                <MemoizedSelect onChange={selectCityByCountry} items={citiesFilteredByCountry} value={value2}/>
                <MemoizedSelect onChange={selectCityByPopulation} items={citiesFilteredByPopulation} value={valueByPopulation}/>
            </div>
        </div>
    );
}

/*export const Example1 = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempRes = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                let someNum = Math.random();
            }
            tempRes *= i;
        }
        return tempRes;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }
    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <div>
                Result for a = {resultA}
            </div>
            <div>
                Result for b = {resultB}
            </div>
        </div>
    );
}*/

/*just testing React.memo*/


/*
const SecretUsers = (props: { users: Array<string> }) => {
    console.log('Secret Users are rendered');
    return (
        <>
            {props.users.map((u, i)=> {
                return (
                    <div key={i}>{u}</div>
                );
            })}
        </>
    );
}

const MemoizedSecretUsers = React.memo(SecretUsers);

export const HelpsReactMemo = () => {
    console.log('Example 1');
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya', 'Sveta']);

    const filteredUsers = useMemo(() => {
        return users.filter(u => u.indexOf('a'));
    }, [users])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <h2>{count}</h2>
            <button onClick={() => setUsers([...users, 'Billy' + new Date()])}>add user</button>
            <MemoizedSecretUsers users={filteredUsers}/>
        </div>
    );
}
*/
