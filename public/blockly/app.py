import flask
import flask_cors
import time
import numpy as np
import argparse
from brainflow.board_shim import BoardShim, BrainFlowInputParams, BoardIds
from brainflow.data_filter import DataFilter


app = flask.Flask(__name__)
flask_cors.CORS(app)

params = BrainFlowInputParams()
params.ip_port = 0
params.serial_port = '/dev/ttyACM0'
params.mac_address = ''
params.other_info = ''
params.serial_number = ''
params.ip_address = ''
params.ip_protocol = 0
params.timeout = 0
params.file = ''
params.master_board = 1

board = BoardShim(1, params)
board.prepare_session()
board.start_stream()

@app.get('/get_bands')
def get_bands():
    try:
        sampling_rate = BoardShim.get_sampling_rate(1)
        chunk_size = sampling_rate
        data = board.get_current_board_data(chunk_size)

        eeg_channels = BoardShim.get_eeg_channels(1)
        bands = DataFilter.get_avg_band_powers(data, eeg_channels, sampling_rate, True)
        feature_vector = bands[0]

        return flask.jsonify({'band_data': feature_vector.tolist()})

    finally:
        pass
if __name__ == '__main__':
    app.run(debug=True, port=6000)