import { Document, Text, Page, StyleSheet, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
   page: {
     backgroundImage: 'url("/images/doc-bg.svg")',
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
   },
   text: {
      fontSize: '50px',
      color: 'red'
   },
   description: {
      fontSize: '70px',
      color: 'blue'
   }
})

const MyDocument = () => (
 <Document>
  <Page size="A4" style={styles.page}>
     <View>
        <Text style={styles.text}>
           Product Designer
        </Text>
     </View>
     <View>
        <Text style={styles.description}>
           Oluwatimilehin Akapo 
        </Text>
     </View>
  </Page>
 </Document>
)

export default MyDocument;
