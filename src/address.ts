export enum AddressCategory {
    // Level 1
    specialCityStatus = 'specialCityStatus',
    region = 'region',

    // Level 2
    regionCity = 'regionCity',
    regionDistrict = 'regionDistrict',

    // Level 3
    districtCity = 'districtCity',
    district = 'district',
    urbanVillage = 'urbanVillage',
    village = 'village',
    settlement = 'settlement',
    villageCouncil = 'villageCouncil',
    unknown = 'unknown',
    settlementCouncil = 'settlementCouncil',
    community = 'community',

    // Level 4
    garageCooperative = 'garageCooperative',
    gardensSociety = 'gardensSociety',

    // Level 5
    street = 'street',
    area = 'area',
    boulevard = 'boulevard',
    avenue = 'avenue',
    alley = 'alley',

    // Level 4-5
    other = 'other',
}
