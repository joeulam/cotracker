'use client'
import { Modal, Button, MantineProvider, NumberInput, Stack, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';

export default function finance(){
    const [opened, { open, close }] = useDisclosure(false);

    return(
		<MantineProvider defaultColorScheme='dark'>
            THIS IS THE finance PAGE
            
        </MantineProvider>
    )
}