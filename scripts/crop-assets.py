#!/usr/bin/env python3
"""Regenerate honest Aven placeholders (not Process screenshot crops)."""

from pathlib import Path
import runpy

runpy.run_path(str(Path(__file__).with_name("generate-aven-placeholders.py")), run_name="__main__")
