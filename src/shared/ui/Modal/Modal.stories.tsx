import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque dolorum ea, laudantium neque nobis\n'
        + 'quia repudiandae velit? A ab aut exercitationem, facere harum quia! Debitis ducimus excepturi ipsum\n'
        + 'porro.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque dolorum ea, laudantium neque nobis\n'
        + 'quia repudiandae velit? A ab aut exercitationem, facere harum quia! Debitis ducimus excepturi ipsum\n'
        + 'porro.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
