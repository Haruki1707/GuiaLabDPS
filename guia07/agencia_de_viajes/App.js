import React, {useState} from 'react';
import {Button, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import PlaceModal from "./src/components/PlaceModal";

function App() {
    const [modalVisiblePlaya, setModalVisiblePlaya] = useState(false);
    const [modalVisiblePlatillos, setModalVisiblePlatillos] = useState(false);
    const [modalVisibleTuristico, setModalVisibleTuristico] = useState(false);

    return (<>
            <ScrollView>
                <PlaceModal title="Ir a la playa" body="El Salvador cuenta con hermosas playas a nivel Centroamérica."
                    visible={modalVisiblePlaya} callbackVisible={setModalVisiblePlaya}/>
                <PlaceModal title="Ir a comer platillos" body="El Salvador cuenta con ricos platillos en Centroamérica."
                            visible={modalVisiblePlatillos} callbackVisible={setModalVisiblePlatillos}/>
                <PlaceModal title="Ir a turistear" body="El Salvador cuenta con bonitos lugares turisticos en Centroamérica."
                            visible={modalVisibleTuristico} callbackVisible={setModalVisibleTuristico}/>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.banner} source={require('./src/img/bg.jpg')}/>
                </View>

                <View style={styles.contenedor}>
                    <Text style={styles.titulo}>Que hacer en El Salvador</Text>
                    <ScrollView horizontal>
                        <View>
                            <Pressable onPress={() => setModalVisiblePlaya(!modalVisiblePlaya)}>
                                <Image source={require('./src/img/actividad1.jpg')} style={styles.ciudad}/>
                            </Pressable>
                        </View>
                        <View>
                            <Image source={require('./src/img/actividad2.jpg')} style={styles.ciudad}/>
                        </View>
                        <View>
                            <Image source={require('./src/img/actividad3.jpg')} style={styles.ciudad}/>
                        </View>
                        <View>
                            <Image source={require('./src/img/actividad4.jpg')} style={styles.ciudad}/>
                        </View>
                        <View>
                            <Image source={require('./src/img/actividad5.jpg')} style={styles.ciudad}/>
                        </View>
                    </ScrollView>
                    <ScrollView>
                        <Text style={styles.titulo}>Platillo Salvadoreños</Text>
                        <View>
                            <Pressable onPress={() => setModalVisiblePlatillos(!modalVisiblePlatillos)}>
                                <Image source={require('./src/img/mejores1.jpg')} style={styles.mejores}/>
                            </Pressable>
                        </View>
                        <View>
                            <Image source={require('./src/img/mejores2.jpg')} style={styles.mejores}/>
                        </View>
                        <View>
                            <Image source={require('./src/img/mejores3.jpg')} style={styles.mejores}/>
                        </View>
                    </ScrollView>
                    <ScrollView>
                        <Text style={styles.titulo}>Rutas Turisticas</Text>
                        <View style={styles.listado}>
                            <View style={styles.listaItem}>
                                <Pressable onPress={() => setModalVisibleTuristico(!modalVisibleTuristico)}>
                                    <Image source={require('./src/img/ruta1.jpg')} style={styles.mejores}/>
                                </Pressable>
                            </View>
                            <View style={styles.listaItem}>
                                <Image source={require('./src/img/ruta2.jpg')} style={styles.mejores}/>
                            </View>
                            <View style={styles.listaItem}>
                                <Image source={require('./src/img/ruta3.jpg')} style={styles.mejores}/>
                            </View>
                            <View style={styles.listaItem}>
                                <Image source={require('./src/img/ruta4.jpg')} style={styles.mejores}/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </>);
}

const styles = StyleSheet.create({
    banner: {
        height: 250,
        flex: 1
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 10
    },
    contenedor: {
        marginHorizontal: 10
    },
    ciudad: {
        width: 250,
        height: 300,
        marginRight: 10
    },
    mejores: {
        width: '100%',
        height: 200,
        marginVertical: 5
    },
    listaItem: {
        flexBasis: '49%'
    },
    listado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
});

export default App;
