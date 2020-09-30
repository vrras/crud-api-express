const loop = () => {
    const database = [
        {
            id: 1,
            name: 'firas',
            jabatan: 'programmer',
            perusahaan: 'PII'
        },
        {
            id: 2,
            name: 'luthfi',
            jabatan: 'programmer',
            perusahaan: 'PII'
        },
        {
            id: 3,
            name: 'andry',
            jabatan: 'programmer',
            perusahaan: 'PII'
        },
        {
            id: 4,
            name: 'yana',
            jabatan: 'programmer',
            perusahaan: 'PII'
        },
        {
            id: 5,
            name: 'diki',
            jabatan: 'programmer',
            perusahaan: 'PII'
        },
        {
            id: 6,
            name: 'yanto',
            jabatan: 'programmer',
            perusahaan: 'PII'
        },
        {
            id: 7,
            name: 'fulan',
            jabatan: 'programmer',
            perusahaan: 'PII'
        },
        {
            id: 8,
            name: 'randy',
            jabatan: 'programmer',
            perusahaan: 'PII'
        },
        {
            id: 9,
            name: 'satya',
            jabatan: 'programmer',
            perusahaan: 'PII'
        },
        {
            id: 10,
            name: 'fina',
            jabatan: 'programmer',
            perusahaan: 'PII'
        },
    ];

    const result = [];
    for (let i = 0; i < database.length; i++) {
        const item = database[i];
        result.push({
            value: item.id,
            text: item.name
        });
    }

    return result;
}

console.log(loop());