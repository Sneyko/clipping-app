#!/usr/bin/env python3
"""Crop screenshot regions into public/ for the exact portal UI."""
from pathlib import Path
from PIL import Image

SRC = Path("/cursor/stores/bc-0bba9cae-e1b8-4da1-8783-79c852e6001c/media/screenshots-exact")
OUT = Path("/workspace/public")


def save(im: Image.Image, box, dest: Path, radius_hint=False):
    dest.parent.mkdir(parents=True, exist_ok=True)
    crop = im.crop(box).convert("RGB")
    crop.save(dest, "PNG", optimize=True)
    print(f"{dest.relative_to(OUT)} {crop.size}")


def main():
    fmt = Image.open(SRC / "04-format.png")
    save(fmt, (544, 408, 1009, 890), OUT / "format/glow-rupture.png")
    save(fmt, (1029, 408, 1494, 890), OUT / "format/foods-bloat.png")
    save(fmt, (1514, 408, 1979, 890), OUT / "format/guide-debloat.png")
    save(fmt, (1999, 408, 2464, 890), OUT / "format/glow-methode-x.png")
    save(fmt, (574, 1690, 1459, 2440), OUT / "format/evoface-grid.png")
    save(fmt, (1548, 1690, 2434, 2440), OUT / "format/chudj-grid.png")

    assets = Image.open(SRC / "05-process-assets.png")
    save(assets, (560, 378, 894, 720), OUT / "assets/icon-app.png")
    save(assets, (948, 378, 1284, 720), OUT / "assets/icon-tile.png")
    screens = [
        ((560, 1036, 894, 1724), "screen-home.png"),
        ((948, 1036, 1284, 1724), "screen-scan-clair.png"),
        ((1336, 1036, 1672, 1724), "screen-scan-sombre.png"),
        ((1724, 1036, 2060, 1724), "screen-scan-en.png"),
        ((2112, 1036, 2448, 1724), "screen-scan-before.png"),
        ((560, 1888, 894, 2420), "screen-scan-after.png"),
        ((948, 1888, 1284, 2308), "screen-recettes.png"),
    ]
    for box, name in screens:
        save(assets, box, OUT / "assets" / name)
    save(assets, (560, 2938, 1284, 3480), OUT / "assets/store-card.png")
    save(assets, (1336, 2988, 2060, 3480), OUT / "assets/store-fiche.png")
    save(assets, (2112, 2988, 2448, 3360), OUT / "assets/badge-download.png")
    save(assets, (560, 3620, 894, 4040), OUT / "assets/logo-appstore.png")

    lab = Image.open(SRC / "06-slideshow-lab.png")
    save(lab, (544, 432, 2304, 1656), OUT / "lab/tiktok-manny.png")
    save(lab, (544, 1794, 911, 2434), OUT / "lab/struct-72h-hook.png")
    save(lab, (920, 1794, 1227, 2434), OUT / "lab/struct-72h-before.png")
    save(lab, (1302, 1794, 1669, 2434), OUT / "lab/struct-72h-scan.png")

    dem = Image.open(SRC / "08-demarrage-format.png")
    photos = [
        ((1152, 1144, 1395, 1528), "72h-hook.png"),
        ((1396, 1144, 1639, 1528), "72h-before.png"),
        ((1640, 1144, 1883, 1528), "72h-scan.png"),
        ((1152, 1760, 1395, 2148), "glow-hook.png"),
        ((1396, 1760, 1639, 2148), "glow-tip.png"),
        ((1640, 1760, 1883, 2148), "glow-process.png"),
        ((1152, 2410, 1395, 2798), "food-hook.png"),
        ((1396, 2410, 1639, 2798), "food-aliment.png"),
        ((1640, 2410, 1883, 2798), "food-app.png"),
    ]
    for box, name in photos:
        save(dem, box, OUT / "demarrage" / name)

    pay = Image.open(SRC / "12-demarrage-paiement.png")
    save(pay, (2194, 1196, 2372, 1372), OUT / "rewards/50eur.png")
    save(pay, (2194, 1418, 2372, 1596), OUT / "rewards/100eur.png")
    save(pay, (2194, 1648, 2372, 1828), OUT / "rewards/coaching.png")
    save(pay, (2194, 1888, 2372, 2128), OUT / "rewards/iphone17.png")

    print("done")


if __name__ == "__main__":
    main()
