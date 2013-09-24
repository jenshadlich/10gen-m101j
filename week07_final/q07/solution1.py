import pymongo
import sys

connection = pymongo.Connection("mongodb://localhost", safe=True)

db=connection.question7
images = db.images
albums = db.albums

def find():
        query = {}
        selector = { '_id': 1 }

        try:
                cursor = images.find(query, selector)
        except:
                print "Unexpected error:", sys.exc_info()[0]

        for doc in cursor:
                exists = 0
                imageId = doc['_id']
                exists = albums.find({'images': imageId}).count()
                if exists == 0:
			print imageId
			print "does not exist"
			images.remove({"_id": imageId})
                else:
			print imageId
			print "exists"
                        continue

find()
