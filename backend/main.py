from datetime import datetime, timedelta
import os

from bson import ObjectId
from bson.json_util import dumps
from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from prettyconf import Configuration

config = Configuration()

application = Flask(__name__)
application.config["MONGO_URI"] = config('MONGO_DB_URL')
mongo = PyMongo(application)
db = mongo.db


# Título, Conteúdo e Data de Publicação


@application.route('/', methods=["GET"])
def index():
    publicacoes = db.publicacao.find()

    data = list()
    for publicacao in publicacoes:
        item = {
            'id': str(publicacao['_id']),
            'titulo': str(publicacao['titulo']),
            'conteudo': str(publicacao['conteudo']),
            'data_publicacao': str(publicacao['data_publicacao']),
        }
        data.append(item)

    return jsonify(
        status=True,
        data=data
    )


@application.route("/get-publicacao/<id>", methods=["GET"])
def getPublicacao(id):
    publicacoes = db.publicacao.find_one({"_id": ObjectId(id)})

    data = dumps(
        publicacoes
    )

    return jsonify(
        status=True,
        data=data
    )


@application.route("/post-publicacao", methods=["POST"])
def postPublicacao():
    data = request.get_json(force=True)

    print(data)

    item = {
        'titulo': data['titulo'],
        'conteudo': data['conteudo'],
        'data_publicacao': datetime.now(),
    }

    db.publicacao.insert_one(item)

    return jsonify(
        status=True,
        message='To-do saved successfully!'
    ), 201


@application.route("/put-publicacao/<id>", methods=["PUT"])
def putPublicacao(id):
    publicacoes = db.publicacao.update_one({"_id": ObjectId(id)})
    return jsonify(
        status=True,
        data='publicacação alterada com sucesso'
    ), 204


@application.route("/delete-publicacao/<id>", methods=["DELETE"])
def deletePublicacao(id):
    publicacoes = db.publicacao.delete_one({"_id": ObjectId(id)})
    return jsonify(
        status=True,
        data='publicacação deletada com sucesso'
    ), 200


if __name__ == "__main__":
    ENVIRONMENT_DEBUG = os.environ.get("APP_DEBUG", True)
    ENVIRONMENT_PORT = os.environ.get("APP_PORT", 5000)
    application.run(host='0.0.0.0', port=ENVIRONMENT_PORT, debug=ENVIRONMENT_DEBUG)
