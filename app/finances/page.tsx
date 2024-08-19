'use client'
import { Modal, Button, MantineProvider, NumberInput, Stack, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';

export default function finance(){
    const [opened, { open, close }] = useDisclosure(false);

    return(
		<MantineProvider defaultColorScheme='dark'>
            THIS IS THE finance PAGE
            <Modal.Root opened={opened} onClose={close}>
                <Modal.Overlay />
                <Modal.Content>
                <Modal.Header>
                    <Modal.Title>New Transaction</Modal.Title>
                    <Modal.CloseButton />
                </Modal.Header>
									<Modal.Body>
										<Center>
											<Stack
												h={300}
												bg="var(--mantine-color-body)"
												align="stretch"
												justify="center"
												gap="md"
											>
												<NumberInput
												label="Cost"
												placeholder="Dollars"
												prefix="$"
												defaultValue={0}
											/>
											</Stack>
										</Center>

									</Modal.Body>
                </Modal.Content>
            </Modal.Root>


				<Button onClick={open}>Add Transaction</Button>
        </MantineProvider>
    )
}