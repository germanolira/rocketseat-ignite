import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
          { showProfileData && (
            <Box mr="4" textAlign="right">
            <Text>Elon Musk</Text>
            <Text color="gray.300" fontSize="small">
              elonmusk@hotmail.com
            </Text>
          </Box>
          )}
          <Avatar size="md" name="Elon Musk" src="https://www.infomoney.com.br/wp-content/uploads/2019/06/elon-musk-bloomberg.jpg?fit=900%2C599&quality=50&strip=all" />
    </Flex>
  )
}