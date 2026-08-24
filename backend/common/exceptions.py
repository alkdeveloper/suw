from rest_framework.views import exception_handler
from rest_framework.response import Response


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        return Response(
            {
                "error": True,
                "message": _extract_message(response.data),
                "status_code": response.status_code,
            },
            status=response.status_code,
        )

    return response


def _extract_message(data) -> str:
    if isinstance(data, dict):
        for value in data.values():
            if isinstance(value, list) and value:
                return str(value[0])
            return str(value)
    if isinstance(data, list) and data:
        return str(data[0])
    return str(data)
