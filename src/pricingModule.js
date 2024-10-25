export const PRICING_DATA = [
    ["Vehicle type", "S (1 row)", "M (2 rows)", "L (3+ rows)"],
    ["Duration", "2-4 hrs", "4-6 hrs", "5-8 hrs"],
    ["Price", "$50-$100", "$100-$150", "$125-$200"]
]

export const PACKAGES_DATA = {
    WHITE: {
        desc: "Interior Detail",
        features: [
            "Door jamb cleaning",
            "Thorough vacuum",
            "Plastics, vinyl, & leather cleaning",
            "Interior glass cleaning",
            "Hard surfaces UV protection & restoration"
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
            "Two bucket wash & wax",
            "Wheel & tire cleaning",
            "Hand dry",
            "Tire dressing"
        ],
        price: "$50"
    },
    BLACK: {
        desc: "Full Detail",
        features: [
            "All White features",
            "All Crimson features",
            "Discounted price"
        ],
        prices: {
            "S": "$125",
            "M": "$150",
            "L": "$175"
        }
    }
}
