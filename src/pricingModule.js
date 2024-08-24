export const PRICING_DATA = [
    ["Vehicle type", "S (1 row)", "M (2 rows)", "L (3+ rows)"],
    ["Duration", "2-4 hrs", "4-6 hrs", "5-8 hrs"],
    ["Price", "$50-$100", "$100-$150", "$125-$200"]
]

export const PACKAGES_DATA = {
    WHITE: {
        features: [
            "Thorough vacuum",
            "Plastics & leather cleaning",
            "Rubber mat cleaning",
            "Glass cleaning"
        ],
        prices: {
            "S": "$50",
            "M": "$75",
            "L": "$100"
        }
    },
    CRIMSON: {
        features: [
            "All White features",
            "Carpet mat shampooing",
            "Upholstery shampooing",
            "Door jamb cleaning & protection",
        ],
        prices: {
            "S": "$75",
            "M": "$100",
            "L": "$125"
        }
    },
    BLACK: {
        features: [
            "All Crimson features",
            "Carpet shampooing",
            "Plastics, leather, & rubber protection & restoration",
            "Ozone odor elimination"
        ],
        prices: {
            "S": "$100",
            "M": "$150",
            "L": "$200"
        }
    }
}
