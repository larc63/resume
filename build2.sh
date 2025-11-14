#!/bin/bash

google-chrome --headless --no-pdf-header-footer --run-all-compositor-stages-before-draw --no-margins --print-to-pdf=output/LuisARodriguez.pdf output/LuisARodriguez.html
google-chrome --headless --no-pdf-header-footer --run-all-compositor-stages-before-draw --print-to-pdf=output/MasterCV.pdf output/MasterCV.html
