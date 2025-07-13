
import { View, Text, StyleSheet, FlatList } from 'react-native';



function Item({ name, value }) {
    return (
        <View style={styles.item}>
            <Text style={{color: "#f4f4f4", fontWeight: 700, fontSize: 13}}>{name}</Text>
            <View style={styles.bar}>
                <View style={{width: "50%", backgroundColor: "orange", height: "100%", borderRadius:10}}/>
            </View>
            <Text style={{color: "#f4f4f4", fontWeight: 700, fontSize: 13}}>R$ {value}</Text>
        </View>
    );
}

export default function BarHorizontalGraph({ clientes, values }) {
  return (
    <View style={styles.container}>
        <Item name="Clientes" value={12} />
        <Item name="Clientes" value={12} />
        <Item name="Clientes" value={12} />
        <Item name="Clientes" value={12} />
        <Item name="Clientes" value={12} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: '#717171',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },

    bar: {
        flex: 1,
        height: 16,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#ccc',
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 5,
    }
});
