import Select from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select
}

export const WithValue = () => <Select value={'1'}
                                         onChange={action('Value changed')}
                                         items={[
                                             {value: 1, title: "Minsk"},
                                             {value: 2, title: "Moscow"},
                                             {value: 3, title: "Kiev"}
                                         ]} />

export const WithoutValue = () => <Select
                                       onChange={action('Value changed')}
                                       items={[
                                           {value: 1, title: "Minsk"},
                                           {value: 2, title: "Moscow"},
                                           {value: 3, title: "Kiev"}
                                       ]} />