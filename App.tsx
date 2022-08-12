import { useState } from "react";
import {Text, View, Button, TextInput, StyleSheet} from "react-native";

export default function App() {
  
  const[weight, setWeight] = useState("")
  const[Height, setHeight]  = useState("")
  const[IMC, setIMC] = useState("")

 const calculatorIMC = () => {
  
  const set_weight = parseFloat(weight);

  const set_Height = parseFloat(Height)/100;

  const IMC = set_weight / (set_Height * set_Height);

    if (IMC < 18.5) {

      return setIMC(
        `IMC es ${IMC}, Bajo peso`
      );

    } else if (IMC > 18.5 && IMC < 24.9) {

      return setIMC(
        `IMC es ${IMC}, Peso normal`
      );
    } else if (IMC > 25.0 && IMC < 29.9) {

      return setIMC(
        `IMC es ${IMC}, Sobrepeso`
      );
    } else if (IMC > 30.0) {

      return setIMC(
        `IMC es ${IMC}, Obecidad`
      );
    }
  };

  return (
    <View style = {styles.container}>
      <Text style= {styles.titulo}>Calcular IMC</Text>
      <View style ={styles.inputs}>
        <Text style={styles.text}>Peso: Kilogramos</Text>
        <TextInput style={styles.input} value={weight} keyboardType="number-pad" onChangeText={(e) => setWeight(e)}/>

        <Text style={styles.text}>Altura: Centimetros</Text>
        <TextInput style={styles.input} keyboardType="number-pad" value={Height} onChangeText={(e) => setHeight(e)}/>
      </View>
      <Button title="Calcular"  onPress={() => calculatorIMC()}
      />
      <TextInput style={styles.imc} value={IMC} editable={false} multiline={true}/>
    </View>
  );
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  paddingTop: 50,
},
inputs: {
  width: 420,
  height: "40%",
  justifyContent: "center",
  alignItems: "center",
},
titulo: {
  color: "blue",
  fontSize: 40,
},
text: {
  color: "green",
  fontSize: 20,
},
input: {
  height: 40,
  width: "30%",
  fontSize: 15,
  borderRadius: 5,
  textAlign: "center",
  marginTop: 15,
  marginBottom: 15,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderBottomWidth: 1,
},
imc: {
  height: 100,
  width: 400,
  backgroundColor: "#fff",
  color: "#000",
  fontSize: 17,
  textAlign: "center",
  marginTop: 20,
  marginBottom: 20,
},
});