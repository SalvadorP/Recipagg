// -------------------- COMMON FUNCTIONS FOR THE ACTIONS --------------------
export function actionSuccess(data, type) {
    return {
        type: type,
        data: data
    };
}

export function actionError(type) {
    console.log('THERE WAS AN ERROR');
    console.log(type);
    console.log('-********************-');
    return {
        type: type,
        data: []
    };
}
// --------------------------------------------------------------------------