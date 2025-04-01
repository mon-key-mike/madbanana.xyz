
import textwrap

def generate_prompt(scene, character, animation, mood):
    prompt_template = f"""
Scene: {scene}

Main Character: {character}

Animation: {animation}

Camera: [Choose one: slow zoom in / slow pan left / handheld shake / orbiting camera] — keep it subtle and cinematic.

Mood & Tone: {mood}

No changes to character design. Use same proportions, colors, lighting, and materials as seen in the original image.

End Action: [Describe one simple final gesture or visual — e.g., exhales smoke, poster flickers, light turns off.]

Style Lock: Maintain exact color palette, line weight, and composition of original image. No extra characters or objects unless already present.
"""
    return textwrap.dedent(prompt_template)

def main():
    print("🍌 Banana Cinematic Prompt Generator CLI")
    print("---------------------------------------")

    scene = input("1. Describe the environment exactly as seen in the image: ").strip()
    character = input("2. Describe the banana character, outfit, and pose: ").strip()
    animation = input("3. What light animation or motion should occur (smoke, light flicker, etc)?: ").strip()
    mood = input("4. Describe the tone and mood (e.g. chill, noir, comedic): ").strip()

    prompt = generate_prompt(scene, character, animation, mood)

    print("\n🎬 Generated Prompt:")
    print("--------------------")
    print(prompt)

if __name__ == "__main__":
    main()
