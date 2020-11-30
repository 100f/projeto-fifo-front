//Esta função recebe três parâmetros, um array pra ser convertido
//e duas chaves, uma cujo nome se queira substituir por 'label'
// e outra cujo nome se queira substituir por 'value'

const convertDatasetForSelect = (array, labelTarget, valueTarget) => {
  try {
    return array.map(object => {
      return { label: object[labelTarget], value: object[valueTarget] }
    });
  }
  catch (error) {
    throw new Error('Erro na conversão dos dados.');
  } 
};

export default convertDatasetForSelect;