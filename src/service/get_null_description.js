const get_null_description = (fields) => {
    return fields.filter(field => field.dscription === null)
}

export default get_null_description;