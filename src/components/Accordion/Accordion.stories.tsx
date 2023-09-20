import type {Meta, StoryObj} from "@storybook/react";
import { action } from '@storybook/addon-actions'


import {Accordion} from "./Accordion";
import React, {useState} from "react";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
}

export default {
    component: Accordion
}

// Syntactic sugar here, but we use the previous approach
/*type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        titleValue: 'Demo Accordion',
        accordionIsCollapsed: true,
        setAccordionIsCollapsed: () => {onChangeHandler()}
    }
};*/

const onChangeHandler = action('changed');

export const CollapsedAccordion = () => {
    return (
        <Accordion titleValue='Collapsed Accordion'
                   accordionIsCollapsed={true}
                   setAccordionIsCollapsed={onChangeHandler}
        />
    );
}

export const OpenAccordion = () => {
    return (
        <Accordion titleValue='Opened Accordion'
                   accordionIsCollapsed={false}
                   setAccordionIsCollapsed={onChangeHandler}
        />
    );
}

export const AccordionDemo =() => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <Accordion titleValue={'Demo Accordion'} setAccordionIsCollapsed={setCollapsed} accordionIsCollapsed={collapsed} />
    );
}