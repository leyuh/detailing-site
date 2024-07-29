export const PRICING_DATA = [
    ["Vehicle type", "S (1 row)", "M (2 rows)", "L (3+ rows)"],
    ["Duration", "2-4 hrs", "4-6 hrs", "5-8 hrs"],
    ["Price", "$50-$100", "$100-$150", "$125-$200"]
]

export const PACKAGES_DATA = {
    CRIMSON: {
        features: [
            "Thorough vacuum",
            "Plastics, mats, & glass cleaning",
            "Leather cleaning & conditioning",
            "Fabric seat shampoo & extraction (when applicable)",
            "Carpet shampoo & extraction (when applicable)"
        ],
        prices: {
            "S (1 row)": "$50-75",
            "M (2 rows)": "$100-125",
            "L (3+ rows)": "$125-175"
        }
    },
    BLACK: {
        features: [
            "All crimson features",
            "Ozone odor elimination (when applicable)",
            "Door jamb cleaning & protection",
            "Rubber mat protection & restoration",
            "Plastics protection & restoration",
            "Carpet mat & fabric seat liquid repellent"
        ],
        prices: {
            "S (1 row)": "$75-100",
            "M (2 rows)": "$150-175",
            "L (3+ rows)": "$175-225"
        }
    }
}
