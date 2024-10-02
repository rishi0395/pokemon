import json
import os
import time

template_path = "/data/ccmupdate/nginxTemplate.conf"
json_path = "/etc/config/experiencesForNonFullTime.json"
output_path = "/data/www/nginx.conf"
etc_output_path = "/etc/nginx/nginx.conf"

try:
    with open(template_path, "r", encoding="utf-8") as file:
        template_data = file.read()

    with open(json_path, "r", encoding="utf-8") as file:
        json_data = json.load(file)

    cors_urls = json_data["configResolution"]["resolved"]["CORS"]
    updated_data = template_data.replace("$ngnix", cors_urls)

    with open(output_path, "w", encoding="utf-8") as file:
        file.write(updated_data)

    with open(etc_output_path, "w", encoding="utf-8") as file:
        file.write(updated_data)
except Exception as e:
    print(e)
    print("error setting cors")

time.sleep(2)
try:

    os.system(f"nginx -s reload -c {etc_output_path}")
except Exception as e:
    print(e)
    print("error restarting nginx")

try:
    os.system(f"nginx -s reload -c {output_path}")
except Exception as e:
    print(e)
    print("error restarting nginx")
