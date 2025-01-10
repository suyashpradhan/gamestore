import React from "react";
import {Card, Text} from "react-native-paper";

export const Header = ({title}: { title?: string }) => {
    return (
        <Card mode="elevated" style={{backgroundColor: "black", borderRadius: "none"}}>
            <Text variant="displayMedium"
                  style={{textAlign: "center", paddingVertical: 150, color: "white"}}>GameStore</Text>
        </Card>
    )
}