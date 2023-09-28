import React, {useState} from "react";
import {Button, Modal, Text, View, StyleSheet} from "react-native";

export default function PlaceModal({title, body, visible, callbackVisible}) {
    return (
        <>
            <Modal transparent={true} animationType="slide" visible={visible}
                   onRequestClose={() => alert('Modal has been closed')}>
                <View style={styles.vistaModal}>
                    <View style={styles.modal}>
                        <Text style={styles.subtitulo}>{title}</Text>
                        <Text>{body}</Text>
                        <Button title="Cerrar" onPress={() => callbackVisible(!visible)}/>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    vistaModal: {
        backgroundColor: '#000000aa',
        flex: 1
    },
    modal: {
        backgroundColor: '#fff',
        margin: 50,
        padding: 40,
        borderRadius: 10,
        flex: 1
    },
    subtitulo: {
        fontWeight: 'bold',
        fontSize: 14,
        justifyContent: "center"
    }
});