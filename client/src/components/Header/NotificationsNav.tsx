import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiShoppingCartLine } from "react-icons/ri";

export function NotificationsNav(){
    return (
        <HStack 
            spacing="4"
            mx="8"
            pr="8"
            py="1"
            color="orange.300"
            borderRightWidth={1}
            borderColor="orange.700">
                <Icon as={RiNotificationLine} fontSize="20" />
                <Icon as={RiShoppingCartLine} fontSize="20" />
        </HStack>
    )
}