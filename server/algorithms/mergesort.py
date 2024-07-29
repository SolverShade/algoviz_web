from django.http import JsonResponse


def nodes() -> JsonResponse:
    data = {
        "nodes": [
            {"id": 1, "label": 1},
            {"id": 2, "label": 2},
            {"id": 3, "label": 3},
        ],
        "edges": [
            {"from": 1, "to": 2},
            {"from": 2, "to": 3},
        ],
    }

    return JsonResponse(data, safe=True)
