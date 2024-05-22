


``` ts

const resDialog = await gooddialogs.confirm('Delete?')
if(!resDialog) return gooddialogs.cancelled('cancelled');
const response = await apiService.delete('api/v1/document/' + 4)

if(response.status < 400){
    gooddialogs.success('Borrado con éxito')
}else {
    console.log('Error: ', reponse.data.msg)
}

```