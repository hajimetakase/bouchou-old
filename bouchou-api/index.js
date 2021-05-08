/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const Datastore = require('@google-cloud/datastore');

// Instantiates a client
const datastore = Datastore();

/**
 * Gets a Datastore key from the kind/key pair in the request.
 *
 * @param {object} requestData Cloud Function request data.
 * @param {string} requestData.key Datastore key string.
 * @param {string} requestData.kind Datastore kind.
 * @returns {object} Datastore key object.
 */

/**
 * Creates and/or updates a record.
 *
 * @example
 * gcloud functions call set --data '{"kind":"Task","key":"sampletask1","value":{"description": "Buy milk"}}'
 *
 * @param {object} req Cloud Function request context.
 * @param {object} req.body The request body.
 * @param {string} req.body.kind The Datastore kind of the data to save, e.g. "Task".
 * @param {string} req.body.key Key at which to save the data, e.g. "sampletask1".
 * @param {object} req.body.value Value to save to Cloud Datastore, e.g. {"description":"Buy milk"}
 * @param {object} res Cloud Function response context.
 */


/**
 * Retrieves a record.
 *
 * @example
 * gcloud functions call get --data '{"kind":"Task","key":"sampletask1"}'
 *
 * @param {object} req Cloud Function request context.
 * @param {object} req.body The request body.
 * @param {string} req.body.kind The Datastore kind of the data to retrieve, e.g. "Task".
 * @param {string} req.body.key Key at which to retrieve the data, e.g. "sampletask1".
 * @param {object} res Cloud Function response context.
 */

function getGovs () {
    const query = datastore.createQuery('government')
        .order('tweet_count', { descending: false })
        .order('start_at', { descending: true })
        .limit(10);

    return datastore.runQuery(query)
        .then((results) => {
            const entities = results[0];
            return entities.map((entity) => `Title: ${entity.title}, Date: ${entity.start_at}`);
        });
};

function getKanpos () {
    const query = datastore.createQuery('kanpo')
        .order('es_date', { descending: true })
        .order('tweet_count', { descending: false })
        .limit(10);

    return datastore.runQuery(query)
        .then((results) => {
            const entities = results[0];
            return entities.map((entity) => `Title: ${entity.title}, Date: ${entity.start_at}`);
        });
};



exports.fetchGov = (req, res) => {

    return getGovs()
        .then((entity) => {
            res
                .set('Content-Type', 'text/plain')
                .status(200)
                .send(entity);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send(err.message);
            return Promise.reject(err);
        });
};

exports.fetchKanpo = (req, res) => {

    return getKanpos()
        .then((entity) => {
            res
                .set('Content-Type', 'text/plain')
                .status(200)
                .send(entity);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send(err.message);
            return Promise.reject(err);
        });
};