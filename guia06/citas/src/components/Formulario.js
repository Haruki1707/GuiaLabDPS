import {useState} from "react";
import shortid from 'react-id-generator';
import {Alert, Button, ScrollView, Text, TextInput, TouchableHighlight, View, StyleSheet} from "react-native";
import colors from "../utils/colors";
import DateTimePicker from "react-native-modal-datetime-picker";

const Formulario = ({citas, setCitas, guardarMostrarForm, guardarCitasStorage}) => {
    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [sintomas, guardarSintomas] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState('');
    const [isTimePickerVisible, setTimePickerVisibility] = useState('');

    const showDatePicker = () => setDatePickerVisibility(true);

    const hideDatePicker = () => setDatePickerVisibility(false);

    const confirmarFecha = date => {
        const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
        guardarFecha(date.toLocaleDateString('es-SV', opciones));
        hideDatePicker();
    }

    const showTimePicker = () => setTimePickerVisibility(true);

    const hideTimePicker = () => setTimePickerVisibility(false);

    const confirmarHora = hora => {
        const opciones = {hour: 'numeric', minute: '2-digit', hour12: false};
        guardarHora(hora.toLocaleDateString('es-SV', opciones));
        hideTimePicker();
    }

    const crearNuevaCita = () => {
        if (paciente.trim() === '' || propietario.trim() === '' || telefono.trim() === '' || sintomas.trim() === '') {
            mostrarAlerta();
            return;
        }

        const cita = {paciente, propietario, telefono, fecha, hora, sintomas};
        cita.id = shortid();

        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);

        guardarCitasStorage(JSON.stringify(citasNuevo));

        guardarMostrarForm(false);

        guardarSintomas('');
        guardarPropietario('');
        guardarPropietario('');
        guardarHora('');
        guardarFecha('');
        guardarTelefono('');
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text: 'OK'
            }]
        );
    }

    return (<>
        <ScrollView style={styles.formulario}>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput style={styles.input} onChangeText={texto => guardarPaciente(texto)}/>
            </View>

            <View>
                <Text style={styles.label}>Dueño:</Text>
                <TextInput style={styles.input} onChangeText={texto => guardarPropietario(texto)}/>
            </View>

            <View>
                <Text style={styles.label}>Teléfono contacto:</Text>
                <TextInput style={styles.input} onChangeText={texto => guardarTelefono(texto)}/>
            </View>

            <View>
                <Text style={styles.label}>Fecha:</Text>
                <Button title="Seleccionar Fecha" onPress={showDatePicker}/>
                <DateTimePicker isVisible={isDatePickerVisible} mode="date" onConfirm={confirmarFecha}
                                onCancel={hideTimePicker} local="es_SV" headerTextIOS="Elige la fecha"
                                cancelTextIOS="Cancelar" confirmTextIOS="Confirmar"/>
                <Text>{fecha}</Text>
            </View>

            <View>
                <Text style={styles.label}>Hora:</Text>
                <Button title="Seleccionar Fecha" onPress={showTimePicker}/>
                <DateTimePicker isVisible={isTimePickerVisible} mode="time" onConfirm={confirmarHora}
                                onCancel={hideTimePicker} local="es_SV" headerTextIOS="Elige una hora"
                                cancelTextIOS="cancelar" confirmTextIOS="Confirmar"/>
                <Text>{hora}</Text>
            </View>

            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <TextInput multiline style={styles.input} onChangeText={texto => guardarSintomas(texto)}/>
            </View>

            <View>
                <TouchableHighlight onPress={() => crearNuevaCita()} style={styles.btnSubmit}>
                    <Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    </>);
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#E1E1E1',
        borderWidth: 1,
        borderStyle: "solid"
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: colors.BUTTON_COLOR,
        marginVertical: 10,
    },
    textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: "center"
    }
});

export default Formulario;