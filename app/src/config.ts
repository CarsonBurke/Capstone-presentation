
export interface SlideChild {
    title: string
    /**
     * Rich text expansion on the title
     */
     texts?: string[]
    image?: string
    align: 'center' | 'left' | 'right'
    theme?: 'glassBlack' | 'glassWhite'
}

export interface SlideType {

    slideChildren: SlideChild[]
    BGImage: string
}

export const slides: SlideType[] = [
    {
        BGImage: require('./images/heroBG.png'),
        slideChildren: [
            {
                title: 'Machine Learning Chess With Rust',
                texts: [
                    `By Carson Burke`,
                    `Built with Carson Slides™`
                ],
                image: require('./images/hero.png'),
                align: 'center',
                theme: 'glassWhite', // delete
            },
        ]
    },
    {
        BGImage: require('./images/chessBG.jpg'),
        slideChildren: [
            {
                title: 'Purpose',
                texts: [
                    `Learn Rust`,
                    `Improve my understanding of neural networks`,
                    `Challenge myself`,
                ],
                image: require('./images/neuralNetwork.png'),
                align: 'center',
                theme: 'glassWhite',
            },
        ]
    },
    {
        BGImage: require('./images/code.png'),
        slideChildren: [
            {
                title: 'Step 1: Learn Rust',
                texts: [
                    `I started knowing basically null Rust`,
                    `Had to wrap my head functional coding`,
                    `Talked with professionals who were hard to understand`
                ],
                image: require('./images/rustlang.png'),
                align: 'left',
                theme: 'glassWhite',
            },
        ]
    },
    {
        BGImage: require('./images/NNCode.png'),
        slideChildren: [
            {
                title: 'Step 2: Code Neural Network',
                texts: [
                    `Basically an artificial brain`,
                    `Building upon what I had done before`,
                    `Struggled with Rust throughout`
                ],
                image: require('./images/3b1bNN.png'),
                align: 'right',
                theme: 'glassWhite',
            },
        ]
    },
    {
        BGImage: require('./images/chessBig.png'),
        slideChildren: [
            {
                title: 'Step 3: Chess',
                texts: [
                    `Suprisingly hard to code`,
                    `Massive code problems with ownership`,
                    `Struggled motivation`,
                ],
                align: 'center',
                theme: 'glassWhite',
            },
        ]
    },
    {
        BGImage: require('./images/chessRun.png'),
        slideChildren: [
            {
                title: 'Step 4: Combination',
                texts: [
                    `Tournament system`,
                    `Inputing and running neural networks`,
                    `Genetic algorithm`,
                    `Planning and learning paid off`,
                ],
                image: require('./images/unitCode.png'),
                align: 'center',
                theme: 'glassWhite',
            },
        ]
    },
    {
        BGImage: require('./images/bigNN.png'),
        slideChildren: [
            {
                title: 'Conclusion',
                texts: [
                    `Doesn't run fast enough to learn (not even close)`,
                    `Rust was a huge challenge - required help, thought, and refactoring`,
                    `Accomplished what I wanted, within reason`,
                ],
                align: 'center',
                theme: 'glassWhite',
            },
        ]
    },
]
