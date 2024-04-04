export default function Hero() {
    return (
        <section className="bg-rw-grey p-4 flex items-center flex-1">
            <div className="container text-rw-white">
                <div className="flex flex-col sm:flex-row justify-between gap-8">
                    <div className="flex flex-col">
                        <h2 className="text-2xl my-4">
                            Team Turner | Ray White Orewa
                        </h2>
                        <p className="flex flex-1 items-center">
                            Aliquam orci leo, tincidunt id lacus malesuada,
                            pellentesque bibendum ante. Nulla ultrices semper
                            orci. Etiam euismod eget lacus blandit eleifend.
                            Donec ac ligula a leo vehicula faucibus ut quis
                            libero. Fusce a elit fermentum, rhoncus turpis ac,
                            elementum odio. Sed dictum eros id dolor laoreet
                            sodales. Integer urna urna, pharetra nec varius
                            quis, euismod id nisi. Duis a elit rhoncus, gravida
                            nisl at, ullamcorper augue. Mauris euismod, neque
                            quis venenatis rutrum, leo nunc dignissim nulla, non
                            mattis elit sapien et eros. Aenean sed augue
                            tincidunt nisl consectetur facilisis. Donec gravida
                            facilisis aliquam. Mauris mattis lacus quis diam
                            porttitor fermentum et eleifend arcu. Morbi nec
                            blandit quam. Suspendisse euismod libero varius
                            porttitor euismod.
                        </p>
                    </div>
                    <div className="self-center">
                        <img
                            className="rounded-xl"
                            src="./assets/images/team-turner-photos/team-turner-hero.JPG"
                            alt="Photo of Zoe and Dylan Turner"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
