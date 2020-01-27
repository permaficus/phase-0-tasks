proxytia = (name, role) => {
    if (!name) {return 'Nama harus diisi!'}
    if (!role) {return `Halo ${name}, Pilih peranmu untuk memulai game!`}
    switch (role) {
        case 'Ksatria': return `Selamat datang di Dunia Proxytia, ${name}\nHalo ${role} ${name}, kamu dapat menyerang dengan senjatamu!`;
        case 'Tabib' : return `Selamat datang di Dunia Proxytia, ${name}\nHalo ${role} ${name}, kamu akan membantu temanmu yang terluka`;
        default : return `Selamat datang di Dunia Proxytia, ${name}\nHalo ${role} ${name}, ciptakan keajaiban yang membantu kemenanganmu!`;
    }
}

[
    proxytia('',''),
    proxytia('Mikael',''),
    proxytia('Nina','Ksatria'),
    proxytia('Danu','Tabib'),
    proxytia('Zero','Pennyihir')
    
].forEach((el)=>console.log(el))