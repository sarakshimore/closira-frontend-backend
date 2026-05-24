import logging
from pythonjsonlogger import jsonlogger


logger = logging.getLogger("closira")
logger.setLevel(logging.INFO)

handler = logging.StreamHandler()

formatter = jsonlogger.JsonFormatter(
    '%(asctime)s %(levelname)s %(message)s'
)

handler.setFormatter(formatter)

if not logger.handlers:
    logger.addHandler(handler)
