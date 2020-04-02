function calsses(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ')
}

export default calsses;