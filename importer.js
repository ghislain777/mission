const reader = require('xlsx');
const { District, Commune, Prefecture } = require('./models')

let sheetnumer = 0
file = reader.readFile("./fichiers/districts.xlsx")
data = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[sheetnumer]])
// console.log(data)

const importationDistrict = async (data) => {

    for (let i = 0; i < data.length; i++) {
        const donnee = data[i]
        const [prefecture, createdprefecture] = await Prefecture.findOrCreate({
            where: {
                nom: donnee.PREFECTURE
            }
        })
    
        const [commune, createdcommune] = await Commune.findOrCreate({
            where: {
                nom: donnee.COMMUNE,
                prefecture: prefecture.id
            }
        })
    
        const [district, createddistrict] = await District.findOrCreate({
            where: {
                nom: donnee.DISTRICT,
                commune: commune.id
            }
        })
        if (i === data.length - 1) {
            console.log(`Dernière valeur de i:: ${i}`)
        }
    }
    }

 importationDistrict(data).then(()=> console.log("fini"))

