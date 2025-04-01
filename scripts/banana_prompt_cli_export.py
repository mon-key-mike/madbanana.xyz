
import textwrap
import json
from datetime import datetime

def generate_prompt(scene, character, animation, mood, camera, end_action):
    prompt_template = f"""
Scene: {scene}

Main Character: {character}

Animation: {animation}

Camera: {camera} — keep it subtle and cinematic.

Mood & Tone: {mood}

No changes to character design. Use same proportions, colors, lighting, and materials as seen in the original image.

End Action: {end_action}

Style Lock: Maintain exact color palette, line weight, and composition of original image. No extra characters or objects unless already present.
"""
    return textwrap.dedent(prompt_template)

def save_to_files(prompt_data, text_output):
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    base_filename = f"banana_prompt_{timestamp}"

    # Save Markdown
    with open(f"{base_filename}.md", "w") as md_file:
        md_file.write("# 🎬 Banana Cinematic Prompt\n\n")
        md_file.write(text_output)

    # Save JSON
    with open(f"{base_filename}.json", "w") as json_file:
        json.dump(prompt_data, json_file, indent=4)

    print(f"\n✅ Prompt saved as: {base_filename}.md and {base_filename}.json")

def main():
    print("🍌 Banana Cinematic Prompt Generator CLI")
    print("---------------------------------------")

    scene = input("1. Describe the environment exactly as seen in the image: ").strip()
    character = input("2. Describe the banana character, outfit, and pose: ").strip()
    animation = input("3. What light animation or motion should occur (smoke, light flicker, etc)?: ").strip()
    mood = input("4. Describe the tone and mood (e.g. chill, noir, comedic): ").strip()
    camera = input("5. Choose the camera motion (slow zoom in / slow pan left / handheld shake / orbiting camera): ").strip()
    end_action = input("6. Describe the final gesture or closing motion: ").strip()

    prompt_text = generate_prompt(scene, character, animation, mood, camera, end_action)

    print("\n🎬 Generated Prompt:")
    print("--------------------")
    print(prompt_text)

    prompt_data = {
        "scene": scene,
        "character": character,
        "animation": animation,
        "camera": camera,
        "mood": mood,
        "end_action": end_action,
        "prompt_text": prompt_text.strip()
    }

    save_to_files(prompt_data, prompt_text)

if __name__ == "__main__":
    main()
