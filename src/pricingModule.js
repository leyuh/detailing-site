export const PRICING_DATA = [
    ["Vehicle type", "S (1 row)", "M (2 rows)", "L (3+ rows)"],
    ["Duration", "2-4 hrs", "4-6 hrs", "5-8 hrs"],
    ["Price", "$50-$100", "$100-$150", "$125-$200"]
]

export const PACKAGES_DATA = {
    WHITE: {
        desc: "Interior Detail",
        features: [
            "Thorough vacuum",
            "Plastics, vinyl, & leather cleaning",
            "Steam cleaning",
            "Interior glass cleaning",
            "Door jamb cleaning"
        ],
        prices: {
            "S": "$100",
            "M": "$125",
            "L": "$150"
        }
    },
    CRIMSON: {
        desc: "Exterior Hand Wash",
        features: [
            "Two bucket hand wash",
            "Wheel & tire cleaning",
            "Hand dry",
            "Tire dressing"
        ],
        price: "$60"
    },
    BLACK: {
        desc: "Full Detail",
        features: [
            "All White features",
            "All Crimson features",
            "Discounted price"
        ],
        prices: {
            "S": "$150",
            "M": "$175",
            "L": "$200"
        }
    }
}
