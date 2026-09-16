#!/usr/bin/env python3
"""Honest Aven kit placeholders — typographic, not fake app UI."""

from __future__ import annotations

import shutil
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path("/workspace/public")
ICON_SRC = Path("/cursor/stores/bc-0bba9cae-e1b8-4da1-8783-79c852e6001c/media/brand/aven-icon.png")

GRAPHITE = (11, 13, 14)
GRAPHITE_2 = (21, 24, 26)
GRAPHITE_3 = (32, 36, 38)
LEMON = (195, 242, 97)
INK = (11, 13, 14)
WHITE = (244, 246, 246)
MUTED = (168, 176, 176)
COLD = (244, 246, 246)

FONT_R = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
FONT_B = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
FONT_DB = "/usr/share/fonts/truetype/noto/NotoSansDisplay-Bold.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


def wrap(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont, max_w: int) -> list[str]:
    words = text.split(" ")
    lines: list[str] = []
    cur = ""
    for w in words:
        trial = w if not cur else f"{cur} {w}"
        if draw.textlength(trial, font=fnt) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines or [text]


def rounded_mask(size: tuple[int, int], radius: int) -> Image.Image:
    m = Image.new("L", size, 0)
    d = ImageDraw.Draw(m)
    d.rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return m


def base(w: int, h: int, *, light: bool = False) -> tuple[Image.Image, ImageDraw.ImageDraw]:
    im = Image.new("RGB", (w, h), COLD if light else GRAPHITE)
    d = ImageDraw.Draw(im)
    if not light:
        overlay = Image.new("RGB", (w, h), GRAPHITE_2)
        grad = Image.new("L", (w, h), 0)
        gd = ImageDraw.Draw(grad)
        for y in range(h):
            gd.line([(0, y), (w, y)], fill=int(40 + 180 * (y / max(h - 1, 1))))
        im = Image.composite(overlay, im, grad)
        d = ImageDraw.Draw(im)
        d.rectangle((0, 0, 8, h), fill=LEMON)
    else:
        d.rectangle((0, 0, w, 8), fill=LEMON)
    return im, d


def stamp_kit(d: ImageDraw.ImageDraw, w: int, h: int) -> None:
    fnt = font(FONT_R, max(18, w // 28))
    label = "Kit HD à produire"
    tw = d.textlength(label, font=fnt)
    d.text(((w - tw) / 2, h - 48), label, font=fnt, fill=MUTED)


def paste_icon(im: Image.Image, box: tuple[int, int, int, int]) -> None:
    icon = Image.open(ICON_SRC).convert("RGBA")
    icon = icon.resize((box[2] - box[0], box[3] - box[1]), Image.Resampling.LANCZOS)
    im.paste(icon, box, icon)


def poster(path: Path, w: int, h: int, kicker: str, title: str, sub: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    im, d = base(w, h)
    kfont = font(FONT_B, max(22, w // 18))
    tfont = font(FONT_DB, max(36, w // 9))
    sfont = font(FONT_R, max(22, w // 20))
    y = int(h * 0.14)
    d.text((48, y), kicker.upper(), font=kfont, fill=LEMON)
    y += int(h * 0.08)
    for line in wrap(d, title, tfont, w - 96):
        d.text((48, y), line, font=tfont, fill=WHITE)
        y += int(tfont.size * 1.15)
    y += 18
    for line in wrap(d, sub, sfont, w - 96):
        d.text((48, y), line, font=sfont, fill=MUTED)
        y += int(sfont.size * 1.35)
    size = min(w, h) // 5
    paste_icon(im, (w - size - 40, h - size - 56, w - 40, h - 56))
    stamp_kit(d, w, h)
    im.save(path, "PNG", optimize=True)
    print(path.relative_to(ROOT), im.size)


def phone_placeholder(path: Path, title: str, lines: list[str]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    w, h = 336, 688
    im, d = base(w, h)
    d.rounded_rectangle((28, 36, w - 28, h - 36), radius=36, fill=GRAPHITE_2, outline=GRAPHITE_3, width=2)
    d.rounded_rectangle((120, 52, 216, 64), radius=8, fill=GRAPHITE_3)
    tfont = font(FONT_DB, 28)
    sfont = font(FONT_R, 18)
    y = 110
    for line in wrap(d, title, tfont, w - 80):
        d.text((48, y), line, font=tfont, fill=WHITE)
        y += 36
    y += 12
    d.rectangle((48, y, 48 + 72, y + 6), fill=LEMON)
    y += 28
    for line in lines:
        d.text((48, y), line, font=sfont, fill=MUTED)
        y += 28
    size = 96
    paste_icon(im, ((w - size) // 2, h - size - 80, (w + size) // 2, h - 80))
    stamp_kit(d, w, h)
    im.save(path, "PNG", optimize=True)
    print(path.relative_to(ROOT), im.size)


def wide_placeholder(path: Path, title: str, sub: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    w, h = 750, 374
    im, d = base(w, h)
    tfont = font(FONT_DB, 34)
    sfont = font(FONT_R, 18)
    d.text((40, 56), title, font=tfont, fill=WHITE)
    y = 110
    for line in wrap(d, sub, sfont, w - 200):
        d.text((40, y), line, font=sfont, fill=MUTED)
        y += 26
    paste_icon(im, (w - 140, h - 140, w - 36, h - 36))
    stamp_kit(d, w, h)
    im.save(path, "PNG", optimize=True)
    print(path.relative_to(ROOT), im.size)


def mosaic(path: Path, cells: list[tuple[str, str]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    pad, cell_w, cell_h = 16, 420, 360
    cols, rows = 2, 2
    w = pad * 3 + cell_w * cols
    h = pad * 3 + cell_h * rows
    im = Image.new("RGB", (w, h), COLD)
    d = ImageDraw.Draw(im)
    tfont = font(FONT_DB, 26)
    kfont = font(FONT_B, 14)
    for i, (kicker, title) in enumerate(cells):
        r, c = divmod(i, cols)
        x0 = pad + c * (cell_w + pad)
        y0 = pad + r * (cell_h + pad)
        cell, cd = base(cell_w, cell_h)
        cd.text((24, 28), kicker.upper(), font=kfont, fill=LEMON)
        y = 64
        for line in wrap(cd, title, tfont, cell_w - 48):
            cd.text((24, y), line, font=tfont, fill=WHITE)
            y += 34
        stamp_kit(cd, cell_w, cell_h)
        im.paste(cell, (x0, y0))
    im.save(path, "PNG", optimize=True)
    print(path.relative_to(ROOT), im.size)


def banner(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    w, h = 1760, 720
    im, d = base(w, h)
    kfont = font(FONT_B, 28)
    tfont = font(FONT_DB, 64)
    sfont = font(FONT_R, 28)
    d.text((80, 120), "PHOTO MODE  ·  9:16  ·  GYMTOK", font=kfont, fill=LEMON)
    d.text((80, 190), "Slideshow Aven", font=tfont, fill=WHITE)
    sub = "Hook en 1 seconde. Une promesse par post. Tes images de salle + le kit quand il sera prêt."
    y = 290
    for line in wrap(d, sub, sfont, w - 520):
        d.text((80, y), line, font=sfont, fill=MUTED)
        y += 40
    paste_icon(im, (w - 280, h - 280, w - 80, h - 80))
    # three fake-not-fake slide frames
    for i, label in enumerate(["Hook", "Preuve", "Payoff"]):
        x = 80 + i * 210
        d.rounded_rectangle((x, 430, x + 180, 660), radius=18, outline=LEMON, width=2)
        d.text((x + 24, 500), f"{i + 1:02}", font=font(FONT_DB, 36), fill=LEMON)
        d.text((x + 24, 560), label, font=font(FONT_R, 20), fill=WHITE)
    stamp_kit(d, w, h)
    im.save(path, "PNG", optimize=True)
    print(path.relative_to(ROOT), im.size)


def avatar(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    icon = Image.open(ICON_SRC).convert("RGBA").resize((160, 160), Image.Resampling.LANCZOS)
    im = Image.new("RGB", (160, 160), GRAPHITE)
    im.paste(icon, (0, 0), icon)
    im.save(path, "PNG", optimize=True)
    print(path.relative_to(ROOT), im.size)


def main() -> None:
    brand = ROOT / "brand"
    brand.mkdir(parents=True, exist_ok=True)
    dest_icon = brand / "aven-icon.png"
    shutil.copyfile(ICON_SRC, dest_icon)
    shutil.copyfile(ICON_SRC, ROOT / "assets" / "icon-app.png")
    print("copied icon")

    # tile: icon on graphite rounded
    tile = Image.new("RGB", (512, 512), GRAPHITE)
    icon = Image.open(ICON_SRC).convert("RGBA").resize((420, 420), Image.Resampling.LANCZOS)
    tile.paste(icon, (46, 46), icon)
    (ROOT / "assets").mkdir(exist_ok=True)
    tile.save(ROOT / "assets" / "icon-tile.png", "PNG", optimize=True)

    poster(ROOT / "format" / "rangs-pecs.png", 720, 960, "01  rangs", "10 groupes.", "Performance + regularite.")
    poster(ROOT / "format" / "live-activity.png", 720, 960, "02  live activity", "Repos.", "Dynamic Island.")
    poster(ROOT / "format" / "carte-seance.png", 720, 960, "03  carte 9:16", "1080 x 1920.", "Rang global.")
    poster(ROOT / "format" / "seance-du-jour.png", 720, 960, "04  programmes", "PPL.", "Fondations · Haut/Bas.")

    poster(ROOT / "demarrage" / "rangs-hook.png", 450, 800, "Hook", "T’es quoi comme rang aux pecs ?", "1 seconde, une question.")
    poster(ROOT / "demarrage" / "rangs-paliers.png", 450, 800, "Preuve", "Bronze - Elite", "10 groupes musculaires.")
    poster(ROOT / "demarrage" / "rangs-app.png", 450, 800, "Payoff", "Chaque série compte.", "Kit HD à coller ici.")

    poster(ROOT / "demarrage" / "live-hook.png", 450, 800, "Hook", "Le repos sans déverrouiller", "Zéro friction entre deux séries.")
    poster(ROOT / "demarrage" / "live-lock.png", 450, 800, "Preuve", "Live Activity", "Exercice, charge, 2/3, timer.")
    poster(ROOT / "demarrage" / "live-seance.png", 450, 800, "Payoff", "Tracker à une main", "Tableau série / kg / reps.")

    poster(ROOT / "demarrage" / "carte-hook.png", 450, 800, "Hook", "Le format prêt-à-poster", "Gymtok, 9:16.")
    poster(ROOT / "demarrage" / "carte-card.png", 450, 800, "Preuve", "Carte de fin de séance", "Durée, exercices, rang.")
    poster(ROOT / "demarrage" / "carte-cta.png", 450, 800, "Payoff", "Lien tracké + code", "Pas de fiche App Store fantôme.")

    shutil.copyfile(ROOT / "demarrage" / "rangs-hook.png", ROOT / "lab" / "struct-rangs-hook.png")
    shutil.copyfile(ROOT / "demarrage" / "rangs-paliers.png", ROOT / "lab" / "struct-rangs-paliers.png")
    shutil.copyfile(ROOT / "demarrage" / "rangs-app.png", ROOT / "lab" / "struct-rangs-app.png")

    phone_placeholder(ROOT / "assets" / "screen-rangs.png", "Rangs musculaires", ["10 groupes", "Bronze - Elite", "Pas une capture app"])
    phone_placeholder(ROOT / "assets" / "screen-seance.png", "Séance", ["Tableau kg / reps", "Live Activity", "Pas une capture app"])
    phone_placeholder(ROOT / "assets" / "screen-live.png", "Live Activity", ["Écran verrouillé", "Repos + progression", "Pas une capture app"])
    phone_placeholder(ROOT / "assets" / "screen-routines.png", "Routines", ["4 programmes prêts", "PPL · Haut/Bas", "Pas une capture app"])
    phone_placeholder(ROOT / "assets" / "screen-bilan.png", "Bilan", ["Carte 9:16", "Volume, XP, records", "Pas une capture app"])
    phone_placeholder(ROOT / "assets" / "screen-journal.png", "Journal", ["Historique", "Volume par jour", "Pas une capture app"])

    wide_placeholder(
        ROOT / "assets" / "store-offline.png",
        "Fiche App Store — hors ligne",
        "ID 6810626340 prévu, pas encore publié. Ne pas inventer un lien store qui marche.",
    )
    wide_placeholder(
        ROOT / "assets" / "vitrine.png",
        "Vitrine aven-workout.vercel.app",
        "Site live. Les clips pointeront vers la fiche officielle au lancement.",
    )

    mosaic(
        ROOT / "format" / "aven-grid.png",
        [
            ("rangs", "T’es quoi comme rang aux pecs ?"),
            ("live", "Repos sur l’écran verrouillé"),
            ("carte", "Bilan de séance 9:16"),
            ("ppl", "Séance du jour déjà prête"),
        ],
    )
    avatar(ROOT / "format" / "aven-avatar.png")
    banner(ROOT / "lab" / "slideshow-banner.png")

    # prune process leftovers
    stale = [
        "assets/badge-download.png",
        "assets/logo-appstore.png",
        "assets/screen-home.png",
        "assets/screen-recettes.png",
        "assets/screen-scan-after.png",
        "assets/screen-scan-before.png",
        "assets/screen-scan-clair.png",
        "assets/screen-scan-en.png",
        "assets/screen-scan-sombre.png",
        "assets/store-card.png",
        "assets/store-fiche.png",
        "demarrage/72h-before.png",
        "demarrage/72h-hook.png",
        "demarrage/72h-scan.png",
        "demarrage/food-aliment.png",
        "demarrage/food-app.png",
        "demarrage/food-hook.png",
        "demarrage/glow-hook.png",
        "demarrage/glow-process.png",
        "demarrage/glow-tip.png",
        "format/chudj-grid.png",
        "format/evoface-grid.png",
        "format/foods-bloat.png",
        "format/glow-methode-x.png",
        "format/glow-rupture.png",
        "format/guide-debloat.png",
        "lab/struct-72h-before.png",
        "lab/struct-72h-hook.png",
        "lab/struct-72h-scan.png",
        "lab/tiktok-manny.png",
        "rewards/100eur.png",
        "rewards/50eur.png",
        "rewards/coaching.png",
        "rewards/iphone17.png",
    ]
    for rel in stale:
        p = ROOT / rel
        if p.exists():
            p.unlink()
            print("removed", rel)
    rewards = ROOT / "rewards"
    if rewards.exists() and not any(rewards.iterdir()):
        rewards.rmdir()


if __name__ == "__main__":
    main()
