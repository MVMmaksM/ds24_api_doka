const get_null_type = (fields) => {
    return fields.filter(field => field.type === null)
}

export default get_null_type;