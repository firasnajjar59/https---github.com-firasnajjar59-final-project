

const updateUrlQparams = (QParamsObj,valueQParams,input,value,history,pathvalue ="/") => {
   
    if (QParamsObj.has(valueQParams)) {
        QParamsObj.delete(valueQParams);
      }
      if (input && input !== value) {
        QParamsObj.append(valueQParams, input);
      }
      history.push(`${pathvalue}?${QParamsObj.toString()}`);
}

export default updateUrlQparams