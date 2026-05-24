from app.utils.constants import SOPS


def match_sop(message: str):
    message = message.lower()

    for sop_name, sop_data in SOPS.items():
        for keyword in sop_data["keywords"]:
            if keyword in message:
                return {
                    "matched_sop": sop_name,
                    "response": sop_data["response"]
                }

    return None