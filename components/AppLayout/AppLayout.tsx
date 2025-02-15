'use client';

import { AppShell, Burger, Button, Divider, Flex, Group, NavLink, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Image } from '@mantine/core';
import { IconArrowsRightLeft, IconChevronRight, IconGauge, IconHome2, IconLogout } from '@tabler/icons-react';

export default function AppLayout({children} : {children:React.ReactNode}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
     
      <AppShell.Header>
      <Flex 
        justify="flex-start"
        align="center"
        h="100%"
        gap="sm"
      >
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <Image src="/Portal_logo.svg.png" h="40" w="auto" style={{marginLeft:"10px"}} />
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md" >
          <Stack justify="flex-start" h="100%">
          <NavLink
            href="#required-for-focus"
            label="With icon"
            leftSection={<IconHome2 size={24} stroke={1.5} />}
          />
           <NavLink
            href="#required-for-focus"
            label="With right section"
            leftSection={<IconGauge size={24} stroke={1.5} />}
            rightSection={
              <IconChevronRight size={16} stroke={1.5} className="mantine-rotate-rtl" />
            }
          >
            <NavLink href="#required-for-focus" label="First child link" />
          </NavLink>
          </Stack>
          <Stack 
            justify="flex-end"
            h="250"
            gap="sm"
          >
          <Divider my="sm" /> 
            <NavLink
            href="#required-for-focus"
            label="Change Application"
            leftSection={<IconArrowsRightLeft size={24} stroke={1.5} />}
            />
            <NavLink
            href="#required-for-focus"
            label="Logout"
            leftSection={<IconLogout size={24} stroke={1.5} />}
            />
          </Stack>
        
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}